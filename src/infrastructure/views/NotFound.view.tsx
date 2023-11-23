import { NavigationItemModel } from "../../domain/models/NavigationItem.model.tsx";
import { useMemo } from "react";
import { NAVIGATION_ITEMS } from "../../constants.tsx";
import { TechnicalChallengeLayout } from "../layouts/TechnicalChallenge.layout.tsx";

export interface NotFoundViewProps {}

export const NotFoundView = ({}: NotFoundViewProps): JSX.Element => {
  const navigationItems: NavigationItemModel[] = useMemo<NavigationItemModel[]>(
    () => NAVIGATION_ITEMS,
    [],
  );

  return (
    <TechnicalChallengeLayout navigationItems={navigationItems}>
      <h1>404 Page Not Found</h1>
    </TechnicalChallengeLayout>
  );
};
