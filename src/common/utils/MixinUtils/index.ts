import {
   TABLET_MIN_WIDTH,
   DESKTOP_MIN_WIDTH,
   LG_DESKTOP_MIN_WIDTH
} from '../../constants/ResponsiveConstants'

export const mobile = `@media (max-width: ${TABLET_MIN_WIDTH - 1}px) `

export const tablet = `@media (min-width: ${TABLET_MIN_WIDTH}px) and (max-width: ${DESKTOP_MIN_WIDTH -
   1}px)`

export const mdDesktop = `@media (min-width: ${DESKTOP_MIN_WIDTH}px) and (max-width: ${LG_DESKTOP_MIN_WIDTH -
   1}px)`

export const desktop = `@media (min-width: ${DESKTOP_MIN_WIDTH}px)`

export const lgDesktop = `@media (min-width: ${LG_DESKTOP_MIN_WIDTH}px)`

export const customDevice = (minWidth: number, maxWidth: number) =>
   `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`

export const minDeviceWidth = (minWidth: number) =>
   `@media (min-width: ${minWidth}px)`

export const maxDeviceWidth = (maxWidth: number) =>
   `@media (max-width: ${maxWidth}px)`
