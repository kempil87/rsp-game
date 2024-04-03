import { AppHeader } from './containers/app-header/app-header.tsx';
import { Fragment } from 'react';
import { MainLayout } from './containers/main-layout/main-layout.tsx';
import { FloatButtons } from './containers/float-buttons/float-buttons.tsx';
import { RulesModal } from './shared/components/rules-modal/rules-modal.tsx';
import { AppLoader } from './shared/components/app-loader/app-loader.tsx';

export const App = () => {
  return (
    <Fragment>
      <AppHeader />

      <MainLayout />

      <FloatButtons />

      <RulesModal />
      <AppLoader />
    </Fragment>
  );
};
