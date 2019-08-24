import {
  NavigationContainerComponent,
  NavigationAction,
  NavigationActions,
  NavigationBackActionPayload,
  NavigationInitActionPayload,
  NavigationNavigateActionPayload,
  NavigationSetParamsActionPayload,
} from 'react-navigation';

class NavigationService {
  private NavigatorRef!: NavigationContainerComponent;

  private dispatch(action: NavigationAction): boolean {
    return this.NavigatorRef.dispatch(action);
  }

  public get navigatorRef(): NavigationContainerComponent {
    return this.NavigatorRef;
  }

  public set navigatorRef(value: NavigationContainerComponent) {
    this.NavigatorRef = value;
  }

  public back(options?: NavigationBackActionPayload) {
    return this.dispatch(NavigationActions.back(options));
  }

  public init(options?: NavigationInitActionPayload) {
    return this.dispatch(NavigationActions.init(options));
  }

  public navigate(options: NavigationNavigateActionPayload) {
    return this.dispatch(NavigationActions.navigate(options));
  }

  public setParams(options: NavigationSetParamsActionPayload) {
    return this.dispatch(NavigationActions.setParams(options));
  }
}

export default new NavigationService();
