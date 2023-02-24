import * as React from 'react';

interface IProps {
  colors: {
    black: '#1d1d1d';
    neutralDark: '#373737';
    neutralPrimary: '#f1f1f1';
    neutralPrimaryAlt: '#6c6c6c';
    neutralSecondary: '#878787';
    neutralTertiary: '#a1a1a1';
  } & Record<string, string>;
  background?: string;
}

export default function Pallette({ colors, background }: IProps) {
  return (
    <div className="pallette" style={{ background }}>
      {Object.keys(colors).map((k) => (
        <div className="pallette-item" key={k}>
          <div className="pallette-color" style={{ background: colors[k] }} />
          <div
            className="pallette-name"
            style={{ color: background && colors.neutralPrimary }}
          >
            {k}
          </div>
        </div>
      ))}
    </div>
  );
}
