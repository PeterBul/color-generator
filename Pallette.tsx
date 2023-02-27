import * as React from 'react';

export interface IForegroundPallette {
  type: 'fg';
  black: string;
  neutralDark: string;
  neutralPrimary: string;
  neutralPrimaryAlt: string;
  neutralSecondary: string;
  neutralTertiary: string;
}

export interface IBackroundPallette {
  type: 'bg';
  white: string;
  neutralLight: string;
  neutralLighter: string;
  neutralLighterAlt: string;
  neutralQuaternary: string;
  neutralQuaternaryAlt: string;
  neutralTertiaryAlt: string;
}

type IPallette = IForegroundPallette | IBackroundPallette;

interface IProps {
  name: string;
  colors: IPallette;
  background?: string;
}

export default function Pallette({ name, colors, background }: IProps) {
  return (
    <div className="pallette-wrapper">
      <div className="pallette-name">{name}</div>
      <div className="pallette" style={{ background }}>
        {Object.keys(colors)
          .filter((k) => k !== 'type')
          .map((k) => (
            <div className="pallette-item" key={k}>
              <div
                className="pallette-color"
                style={{ background: colors[k] }}
              />
              <div
                className="pallette-name"
                style={{
                  color:
                    (background && colors[k]) ||
                    (colors.type === 'bg' ? colors.white : colors.black),
                }}
              >
                {k}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
