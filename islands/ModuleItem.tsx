/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { Module } from "../routes/index.tsx"

type ModuleItemProps = {
  module: Module
}

export default function ModuleItem(props: ModuleItemProps) {
  const module = props.module;
  return (
    <li key={module.name} class={tw`text-lg`}><span class={tw`font-bold`}>{module.name} </span>({module.popularity_score}): {module.description}</li>
  )
}