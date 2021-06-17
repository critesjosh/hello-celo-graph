import { NameUpdated } from '../generated/HelloWorld/HelloWorld'
import { Name } from '../generated/schema'

export function handleNameUpdated(event: NameUpdated): void {
  let id = event.params.newName
  let name = Name.load(id)
  if (name == null) {
    name = new Name(id)
  }
  name.oldName = event.params.oldName
  name.updater = event.params.updater
  name.save()
}