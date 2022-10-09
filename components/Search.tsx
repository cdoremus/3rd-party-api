import { tw } from "twind";

type SearchProps = {
  searchTerm: string;
}

export default function Search(props: SearchProps) {
  return (
    <div class={tw`flex flex-row`}>
      <div class={tw`text-xl mr-2`}>Search: </div>
      <div>
        <form method="post">
          <input
            type="text"
            name="search"
            id="search"
            value={props.searchTerm}
            class={tw`border w-full`}
          />
        </form>
      </div>
    <a class={tw`w-full text-center underline`} href="/">Show All Modules</a>
  </div>
  )
}

