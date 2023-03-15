import { Search } from "../components/Search"
import { Controls } from "../components/Controls"
import { List } from "../components/List"
import { CustomSelect } from "../components/CustomSelect"

export const Home = () => {
  return (
    <div>
      <Controls>
        <Search />
        <CustomSelect />
      </Controls>
      <List />
    </div>
  )
}
