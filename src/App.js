import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider";
import router from "./routes/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from "./contexts/AuthProvider";

const queryClient = new QueryClient()

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="bg-[#F7F9FB] dark:bg-gray-900 font-maven">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
