import assert from "assert";
import { 
  TestHelpers,
  ERC20BurnMint_Approval
} from "generated";
const { MockDb, ERC20BurnMint } = TestHelpers;

describe("ERC20BurnMint contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ERC20BurnMint contract Approval event
  const event = ERC20BurnMint.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ERC20BurnMint_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ERC20BurnMint.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualERC20BurnMintApproval = mockDbUpdated.entities.ERC20BurnMint_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedERC20BurnMintApproval: ERC20BurnMint_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualERC20BurnMintApproval, expectedERC20BurnMintApproval, "Actual ERC20BurnMintApproval should be the same as the expectedERC20BurnMintApproval");
  });
});
