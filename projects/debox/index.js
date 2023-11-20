const { sumTokens2, nullAddress } = require('../helper/unwrapLPs')

const contractV1 = "0xD746aE5e6E43e3B6a2c7bD18B60760E0861523F9"
const contractV2 = "0x2D85ec05893d33C32ccAb97CDd17E512033ebDAD"

async function tvl(time, ethBlock, _b, {api}) {
  return sumTokens2({ tokens: [nullAddress], owners: [contractV1,contractV2], api })
}

module.exports = {
  methodology: `We count the ETH on ${contractV1} and ${contractV2}`,
  era: {
    tvl
  }
}