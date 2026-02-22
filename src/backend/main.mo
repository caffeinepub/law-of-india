import List "mo:core/List";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";



actor {
  public type Law = {
    title : Text;
    number : Nat;
    explanation : Text;
  };

  public type Preamble = {
    title : Text;
    explanation : Text;
  };

  module Law {
    public func compare(law1 : Law, law2 : Law) : Order.Order {
      Nat.compare(law1.number, law2.number);
    };
  };

  var laws = List.empty<Law>();
  var preamble : ?Preamble = null;

  public shared ({ caller }) func addLaw(title : Text, number : Nat, explanation : Text) : async Nat {
    let countLawNumber = func(specificLawNumber : Nat) : Nat {
      var count = 0;
      for (law in laws.values()) {
        if (law.number == specificLawNumber) {
          count += 1;
        };
      };
      count;
    };

    if (laws.size() == 99 and countLawNumber(99) == 1) {
      Runtime.trap("Cannot add more than 99 laws. ");
    };

    let law = {
      title;
      number;
      explanation;
    };
    laws.add(law);
    laws.size();
  };

  public shared ({ caller }) func setPreamble(title : Text, explanation : Text) : async () {
    preamble := ?{
      title;
      explanation;
    };
  };

  public query ({ caller }) func getPreamble() : async ?Preamble {
    preamble;
  };

  public query ({ caller }) func getLaw(number : Nat) : async ?Law {
    laws.values().find(func(law) { law.number == number });
  };

  public query ({ caller }) func getAllLaws() : async [Law] {
    laws.toArray().sort();
  };

  public shared ({ caller }) func initializeLaws(initialLaws : [(Text, Nat, Text)]) : async () {
    if (laws.size() != 0) {
      Runtime.trap("Laws have already been initialized");
    };

    if (initialLaws.size() != 99) {
      Runtime.trap("Initial laws must contain exactly 99 entries");
    };

    laws := List.empty<Law>();
    let newLawsArray = initialLaws.map(func(entry) { { title = entry.0; number = entry.1; explanation = entry.2 } });
    laws.addAll(newLawsArray.values());
  };

  public shared ({ caller }) func clear() : async () {
    laws.clear();
    preamble := null;
  };
};
