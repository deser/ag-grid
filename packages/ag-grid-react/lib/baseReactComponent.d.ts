// ag-grid-react v21.2.2
import { IComponent, WrapableInterface } from 'ag-grid-community';
export declare abstract class BaseReactComponent implements IComponent<any>, WrapableInterface {
    hasMethod(name: string): boolean;
    callMethod(name: string, args: IArguments): void;
    addMethod(name: string, callback: Function): void;
    abstract getGui(): HTMLElement;
    abstract getFrameworkComponentInstance(): any;
}
