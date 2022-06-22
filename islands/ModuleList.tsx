/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { Module } from "../routes/index.tsx";
import ModuleItem from "./ModuleItem.tsx";

type ModuleListProps = {
  modules: Module[]
}

export default function ModuleList(props: ModuleListProps) {
  const modules = props.modules;
  return (
    <ul class={ tw`list-none` }>
      { modules.map( (mod: Module, index: number) => {
        return (<ModuleItem rank={ index + 1} module={mod} />)
      }) }
    </ul>
  )
}