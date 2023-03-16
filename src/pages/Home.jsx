import { Search } from "../components/Search"
import { Controls } from "../components/Controls"
import { List } from "../components/List"
import { CustomSelect } from "../components/CustomSelect"

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container">
        <Controls>
          <Search />
          <CustomSelect />
        </Controls>
        <List />
      </div>
    </div>
  )
}
