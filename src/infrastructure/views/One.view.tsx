import { TechnicalChallengeLayout } from "../layouts/TechnicalChallenge.layout.tsx";
import { NavigationItemModel } from "../../domain/models/NavigationItem.model.tsx";
import { useMemo } from "react";
import { NAVIGATION_ITEMS } from "../../constants.tsx";

export interface OneViewProps {}

export const OneView = ({}: OneViewProps): JSX.Element => {
  const navigationItems: NavigationItemModel[] = useMemo<NavigationItemModel[]>(
    () => NAVIGATION_ITEMS,
    [],
  );

  return (
    <TechnicalChallengeLayout navigationItems={navigationItems}>
      <h1>Hello!! this is the first view</h1>
    </TechnicalChallengeLayout>
  );
};
