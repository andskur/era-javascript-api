import { hooks as era } from './Utils/hooks'

import * as block from './Block'
import * as blocks from './Blocks'
import * as record from './Record'
import * as address from './Address'
import {lastHeight, verifySign} from './Tools'

era.block = block
era.blocks = blocks
era.record = record
era.address = address
era.lastHeight = lastHeight
era.verifySign = verifySign

export default era
