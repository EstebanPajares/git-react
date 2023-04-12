import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/search";


const repoList = [
  {
    name : 'Project X con react',
    id : 123,
  },
  {
    name : 'Project 2 con react',
    id : 456,

  }
]

function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList repoList={repoList}/>
      <Search/>
    </Layout>
  )

}

export default App;
