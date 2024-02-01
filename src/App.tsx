import ProtectedRoute from "./component/ProtectedRoute";
import MainLayout from "./component/layout/MainLayout";
const App = () => {
  return (
    <div className="max-h-[100vh]">
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
      {/* <CustomLayout/> */}
    </div>
  );
};

export default App;
