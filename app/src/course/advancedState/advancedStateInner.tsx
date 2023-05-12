import { useContext } from "react";
import { StoriesContext } from "./context";
import { Story } from "../advancedState/data";
import { InputWithLabel } from "../advancedState/inputWithLabel";
import { List } from "../advancedState/list";
import { useFetchData } from "../advancedState/useFetchData";
import { useLocalStorageState } from "../advancedState/useLocalStorageState";

export function AdvancedStateInner() {
  const [searchTerm, setSearchTerm] = useLocalStorageState("search", "React"),
    context = useContext(StoriesContext);

  if (!context) {
    throw new Error("StoriesContext not provided");
  }

  const { state, dispatch } = context,
    { stories, isLoading, isError } = state;

  useFetchData(searchTerm, dispatch);

  const handleRemoveStory = (item: Story) => {
      dispatch({
        type: "REMOVE_STORY",
        payload: item
      });
    },
    handleSearch = (value: string) => {
      setSearchTerm(value);
    };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        focusOnInit
        id="search"
        onInputChange={handleSearch}
        type="text"
        value={searchTerm}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      {isError ? (
        <p>Something went wrong ...</p>
      ) : isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={stories.filter((story: any) =>
            story.title.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          onRemoveItem={handleRemoveStory}
        />
      )}
    </div>
  );
}
