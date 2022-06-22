/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { Module } from "../routes/index.tsx"

type ModuleItemProps = {
  module: Module;
  rank: number;
}

export default function ModuleItem(props: ModuleItemProps) {
  const module = props.module;
  const rank = props.rank;
  return (
    <li key={rank} class={tw`text-lg`}><span>{rank}. </span><span class={tw`font-bold`}>{module.name} </span>({module.popularity_score}): {module.description}</li>
  )
}