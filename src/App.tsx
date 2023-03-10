import { Card } from "@konradduleba/library-ui.components.card";
import { BimbowsWindow } from "@konradduleba/library-ui.layout.bimbows-window";
import { PageLayout } from "@konradduleba/library-ui.layout.page-layout";
import Bimbows from "./modules/bimbows";
import Description from "./modules/description";

const App = () => {
  return (
    <PageLayout title="Bimbows 3.1">
      <Description />
      <Card>
        <BimbowsWindow>
          <Bimbows />
        </BimbowsWindow>
      </Card>
    </PageLayout>
  );
};

export default App;
