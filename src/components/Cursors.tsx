import {
  CursorOverlayData,
  useRemoteCursorOverlayPositions,
} from "@slate-yjs/react";
import React, { CSSProperties, ReactNode, useRef } from "react";
import { Cursor } from "@/types";

// Create live cursors inside the text editor
export function Cursors({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursors] = useRemoteCursorOverlayPositions<Cursor>({
    containerRef,
  });

  return (
    <div className='relative' ref={containerRef}>
      {children}
      {cursors.map((cursor) => (
        <Selection key={cursor.clientId} {...cursor} />
      ))}
    </div>
  );
}

function Selection({
  data,
  selectionRects,
  caretPosition,
}: CursorOverlayData<Cursor>) {
  if (!data) {
    return null;
  }

  const selectionStyle: CSSProperties = {
    backgroundColor: data.color,
  };

  return (
    <>
      {selectionRects.map((position, i) => (
        <div
          style={{ ...selectionStyle, ...position }}
          className='absolute pointer-events-none opacity-20'
          key={i}
        />
      ))}
      {caretPosition && <Caret caretPosition={caretPosition} data={data} />}
    </>
  );
}

type CaretProps = Pick<CursorOverlayData<Cursor>, "caretPosition" | "data">;

function Caret({ caretPosition, data }: CaretProps) {
  const caretStyle: CSSProperties = {
    ...caretPosition,
    background: data?.color,
  };

  const labelStyle: CSSProperties = {
    transform: "translateY(-100%)",
    background: data?.color,
  };

  return (
    <div style={caretStyle} className='absolute w-[2px]'>
      <div className='absolute text-sm text-white whitespace-nowrap top-0 rounded-md px-[2px] py-[6px] pointer-events-none' style={labelStyle}>
        {data?.name}
      </div>
    </div>
  );
}
