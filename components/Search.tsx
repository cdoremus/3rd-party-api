
type SearchProps = {
  searchTerm: string;
}

export default function Search(props: SearchProps) {
  return (
    <div class="flex flex-row">
      <div class="text-xl mr-2">Search: </div>
      <div>
        <form method="post">
          <input
            type="text"
            name="search"
            id="search"
            value={props.searchTerm}
            class="border w-full"
          />
        </form>
      </div>
    <a class="w-full text-center underline" href="/">Show All Modules</a>
  </div>
  )
}

