import CounterStore from './CounterStore'

import EditorStore from '../../Editor/Components/BasicEditor/stores/EditorStore'

const counterStore = new CounterStore()
const editorStore = new EditorStore()

export default {
   counterStore,
   editorStore
}
