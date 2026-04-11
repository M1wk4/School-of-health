import { Route, Routes, useNavigate } from "react-router-dom";
import { Responses404 } from "@consta/uikit/Responses404";
import { Button } from "@consta/uikit/Button";
import MainPage from "@/pages/MainPage/MainPage";
import FormsPage from "@/pages/FormsPage/FormsPage";
import MaterialsPage from "@/pages/MaterialsPage/MaterialsPage";
import TheoryPage from "@/pages/TheoryPage/TheoryPage";
import LessonPage from "@/pages/LessonPage/LessonPage";
import AppLayout from "./AppLayout/AppLayout";

const AppRouter = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/theory" element={<TheoryPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route
          path="*"
          element={
            <Responses404
              actions={
                <Button
                  size="m"
                  view="ghost"
                  label="Назад"
                  onClick={() => navigate("/")}
                />
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
