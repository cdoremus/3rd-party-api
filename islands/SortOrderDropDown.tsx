import { useRef } from "preact/hooks";
import { OrderOptions } from "../types.ts";

type OrderByProps = {
  order: OrderOptions;
}

export default function SortOrderDropDown(props: OrderByProps) {
  const order = props.order ?? "score";
  const formRef = useRef(null);

  // deno-lint-ignore no-explicit-any
  const handleOptionChange = (event: any) => {
    const sortOrder = event.target.value
    // console.log("option selected: ", sortOrder);
    // handle form submission
    (formRef.current)?.submit();
  };

  return (
    <div class="flex flex-row">
      <div>
        <form method="post" ref={formRef}>
          <label for="order_by">Select Sort Order: </label>
          <select id="order_by" name="order_by" onChange={handleOptionChange}>
            <option value="score" selected={order === "score"}>Popularity Score</option>
            <option value="stars" selected={order === "stars"}>Github Stars</option>
            <option value="75_25" selected={order === "75_25"}>75% Pop Score, 25% GH Stars</option>
          </select>
        </form>
      </div>
  </div>
  )
}

