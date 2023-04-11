import modifyProgramIdlScript from "@bullistic-hq/bullistic-program-shared/dist/scripts/modifyProgramIdlScript";

modifyProgramIdlScript({
  decodedTransactionResultTypeFilePath:
    "src/sdk/types/DecodedCampaignTreasuryManagerTransactionResult.ts",
  idlFilePath: "src/sdk/idl/CampaignTreasuryManager.ts",
  programName: "CampaignTreasuryManager",
});
