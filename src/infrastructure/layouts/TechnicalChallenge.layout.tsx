import { NavLink } from "react-router-dom";
import { NavigationItemModel } from "../../domain/models/NavigationItem.model.tsx";
import "../styles/technical-challenge-layout.scss";

export interface TechnicalChallengeLayoutProps {
  children?: JSX.Element | JSX.Element[];
  navigationItems: NavigationItemModel[];
}

export const TechnicalChallengeLayout = ({
  children,
  navigationItems,
}: TechnicalChallengeLayoutProps): JSX.Element => {
  return (
    <main className="technical-challenge-layout">
      <nav className="navigation">
        <div className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/18/20/18/international-1751293_1280.png"
            alt="logo"
          />
        </div>

        <ul className="items">
          {navigationItems.map(({ path, name }) => (
            <li className="item" key={name}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section className="main-content">{children}</section>
    </main>
  );
};
