import {
  GenericNumber,
  genericNumberToNumber,
} from "@bullistic-hq/bullistic-program-shared";
import BN from "bn.js";

export default function getSecondsAfterCampaignEndTime(
  campaignEndTime: GenericNumber,
  secondsAfter: GenericNumber
): BN {
  return new BN(
    genericNumberToNumber(campaignEndTime) + genericNumberToNumber(secondsAfter)
  );
}
