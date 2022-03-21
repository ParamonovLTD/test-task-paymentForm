export type overrideAllPropertiesTypes<Obj, T> = {
  [K in keyof Obj]: T
}