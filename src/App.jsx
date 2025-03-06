import { Provider } from 'react-redux'
import Body from './components/Body/Body'
import appStore from './utils/ReduxStore/appStore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse/Browse';

function App() {

   const appRouter = createBrowserRouter([
          {
              path: "/",
              element: <Body />
          },
          {
              path: "/browse",
              element: <Browse />
          }
      ]);

  return (
    <Provider store={appStore}>
      <div>
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
