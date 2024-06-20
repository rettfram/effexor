/***
 * Creates reactive signal.
 * 
 * @template T - Type of value of signal.
 * @param {T} initialValue - Initial value of signal.
 * @returns {(newValue?: T) => T} Function for getting or setting value of signal.
 */
export const signal: <T>(initialValue: T) => (newValue?: T) => T;

/***
 * Creates reactive side effect.
 * 
 * @param {() => void} callback - Callback function to run when dependencies change.
 * @returns {() => void} Cleanup function to stop side effect.
 */
export const effect: (callback: () => void) => () => void;

/***
 * Creates custom element with reactive behavior.
 * 
 * @param {string} componentName - Name of custom element.
 * @param {(element: HTMLElement) => void} componentDefinition - Function defining custom element.
 * @returns {void} No return value from render function.
 */
export const render: (componentName: string, componentDefinition: (element: HTMLElement) => void) => void;