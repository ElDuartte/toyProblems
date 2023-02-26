const chai = require("chai");
const assert = chai.assert;

const disemvowelTrolls = require("../23-disemvowel-trolls.js");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      disemvowelTrolls("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    );
    assert.strictEqual(
      disemvowelTrolls(
        "No offense but,\nYour writing is among the worst I've ever read"
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
    assert.strictEqual(
      disemvowelTrolls("What are you, a communist?"),
      "Wht r y,  cmmnst?"
    );
  });
});
