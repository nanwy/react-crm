import styled from '@emotion/styled'
interface HamburguerProps {
  gap?: number | boolean
}
export const Row = styled.div<HamburguerProps>`
  display: flex;
  align-items: center;
  > * {
    margin-right: ${(props: any) =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`
