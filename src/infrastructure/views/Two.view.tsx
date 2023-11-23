import { TechnicalChallengeLayout } from "../layouts/TechnicalChallenge.layout.tsx";
import { NavigationItemModel } from "../../domain/models/NavigationItem.model.tsx";
import { useMemo } from "react";
import { NAVIGATION_ITEMS } from "../../constants.tsx";

export interface TwoViewProps {}

export const TwoView = ({}: TwoViewProps): JSX.Element => {
  const navigationItems: NavigationItemModel[] = useMemo<NavigationItemModel[]>(
    () => NAVIGATION_ITEMS,
    [],
  );

  return (
    <TechnicalChallengeLayout navigationItems={navigationItems}>
      <h1>Hello!! this is the second view</h1>
    </TechnicalChallengeLayout>
  );
};
