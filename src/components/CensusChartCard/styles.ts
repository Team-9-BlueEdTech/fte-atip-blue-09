import styled, { css } from "styled-components";

interface StyledBarProps {
  value?: number;
  size?: number;
  color?: string;
}

export const Card = styled.div`

  background-color: white;
  border-radius: 2rem;
  padding: 1rem;

  overflow: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

`

export const CardChart = styled.div`

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

`

export const ChartBar = styled.div<StyledBarProps>`

  ${({ size }) => css`

    width: 100%;
    height: ${size}%;
    min-height: 8%;

    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;

    h5 {
      position: absolute;
      left: 1rem;
    }
  `}

`

export const ChartValue = styled.div<StyledBarProps>`

  ${({ value, color }) => css`

    width: ${value}%;
    height: 100%;

    background-color: ${color};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    padding-right: 1rem;
  
  `}

`