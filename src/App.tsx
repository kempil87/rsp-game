import { AppHeader } from './shared/containers/app-header/app-header.tsx';
import { Fragment } from 'react';
import { MainLayout } from './shared/containers/main-layout/main-layout.tsx';
import { FloatButtons } from './shared/containers/float-buttons/float-buttons.tsx';
import { RulesModal } from './shared/components/rules-modal/rules-modal.tsx';

export const App = () => {
  return (
    <Fragment>
      <AppHeader />

      <MainLayout />

      <FloatButtons />

      <RulesModal />
    </Fragment>
  );
};
