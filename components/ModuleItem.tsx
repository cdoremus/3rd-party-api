import { Module } from "../types.ts"

type ModuleItemProps = {
  module: Module;
  rank: number;
}

export default function ModuleItem(props: ModuleItemProps) {
  const module = props.module;
  const rank = props.rank;
  return (
    <li key={rank} class="text-lg">
      <span>{rank}. </span>
      <a href={`https://deno.land/x/${module.name}`} target="_blank">
        <span class="font-bold">{module.name} </span>
      </a>({module.popularity_score}): {module.description}
    </li>
  )
}