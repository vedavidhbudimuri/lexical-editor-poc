export default function isUsedAsDecorator(args): boolean {
   return (
      args.length === 3 &&
      typeof args[1] === 'string' &&
      typeof args[2] === 'object' &&
      'value' in args[2]
   )
}
