import BlockModel from '../Models/BlockModel'

export const createEditorNodeModel = nodeData => {
   return new BlockModel(nodeData)
}
