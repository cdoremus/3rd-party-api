// import { useRef } from "preact/hooks";
import { OrderOptions } from "../types.ts";

type OrderByProps = {
  order: OrderOptions;
}

export default function SortOrderDropDown(props: OrderByProps) {
  const order = props.order ?? "score";
  console.log("order: ", order );
  // const formRef = useRef(null);

  // const handleOptionChange = (event) => {
  //   const sortOrder = event.target.value
  //   // handle form submission
  //   console.log("option selected: ", sortOrder);
  //   formRef.current.submit();
  // };

  // const handleSubmit = (event) => {
  //   console.log("handleSubmit called");
  //   event.preventDefault();

  // };

  return (
    <div class="flex flex-row">
      <div>
        <form method="post">
          <label for="order_by">Select Order By: </label>
          <select id="order_by" name="order_by">
            <option value="score" selected={order === "score"}>Popularity Score</option>
            <option value="stars" selected={order === "stars"}>Github Stars</option>
            <option value="75_25" selected={order === "75_25"}>75% Pop Score, 25% GH Stars</option>
          </select>
          {" "}<button class="btn btn-blue" type="submit">Submit</button>
        </form>
      </div>
  </div>
  )
}

