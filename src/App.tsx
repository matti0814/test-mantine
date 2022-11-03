import { MantineProvider, Text } from '@mantine/core';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/home';
import Test from './pages/test';
export default function App(publicId : any) {
  
  const id = publicId?.publicId;

  if (!id) {
    return <div>
      No Id found
    </div>
  }

  return (
    <MantineProvider withNormalizeCSS>
      <Text>{id}</Text>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}