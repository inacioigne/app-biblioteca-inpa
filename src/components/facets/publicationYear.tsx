'use client'
import {
  NumberField,
} from '@base-ui-components/react/number-field';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Aggregation } from '@/lib/types/elastic';

interface PublicationYearProps {
  setAggs: (aggs: Aggregation) => void;
  aggs: Aggregation;
  filters: Aggregation | null;
  setFilters: (filters: Aggregation | null) => void;
  facets: any,
  setFacets: (facets: any) => void;
}

export default function PublicationYear(
  { 
    setAggs, 
    aggs, 
    filters, 
    setFilters,
    facets,
    setFacets 
  }: PublicationYearProps
) {
  const [minYear, setMinYear] = useState<number>(aggs?.min_year?.value);
  const [maxYear, setMaxYear] = useState<number>(aggs?.max_year?.value);

  useEffect(() => {
    if (aggs?.min_year?.value !== undefined) {
      setMinYear(aggs.min_year.value);
    }
    if (aggs?.max_year?.value !== undefined) {
      setMaxYear(aggs.max_year.value);
    }
  }, [aggs?.min_year?.value, aggs?.max_year?.value]);

  const handleMinYear = async (value: any) => {
    setMinYear(value);
    if (filters?.min_year) {
      setFilters({
        ...filters,
        min_year: {
          ...filters.min_year,
          value: value
        }
      });

      setFacets({
        ...facets,
        fromYear: value
      });

    }
  }

  const handleMaxYear = async (value: any) => {
    setMaxYear(value)
    if (filters?.max_year) {
      setFilters({
        ...filters,
        max_year: {
          ...filters.max_year,
          value: value
        }
      });

      setFacets({
        ...facets,
        toYear: value
      });
    }
  }

  return (
    <Box sx={{
      my: 2,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant="body2">Ano de publicação:</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2
      }}>
        <Box>
          <Typography variant="caption" sx={{ pl: 1 }}>De:</Typography>
          <StyledRoot
            value={minYear}
            onValueChange={(value) => handleMinYear(value)}
            min={aggs?.min_year?.value}
            max={aggs?.max_year?.value}
          >
            <StyledGroup>
              <StyledInput onChange={(value) =>{
                handleMinYear(value.target.value)
              }} />
              <StyledIncrement>▴</StyledIncrement>
              <StyledDecrement>▾</StyledDecrement>
            </StyledGroup>
          </StyledRoot>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ pl: 1 }}>Até:</Typography>
          <StyledRoot
            value={maxYear}
            onValueChange={(value) => handleMaxYear(value)}
            min={aggs?.min_year?.value}
            max={aggs?.max_year?.value}
          >
            <StyledGroup>
              <StyledInput onChange={(value) =>{
                handleMaxYear(value.target.value)
              }} />
              <StyledIncrement>▴</StyledIncrement>
              <StyledDecrement>▾</StyledDecrement>
            </StyledGroup>
          </StyledRoot>
        </Box>
      </Box>
    </Box>
  );
}

// ========================
// Tokens
// ========================
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

// ========================
// Styled Components
// ========================
const StyledRoot = styled(NumberField.Root)(
  ({ theme }) => {
    return `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      border-radius: 8px;
      color: var(--template-palette-text-primary);
      background: var(--template-palette-background-default);
      border: 1px solid var(--template-palette-divider);
      box-shadow: 0 2px 4px var(--template-vars.shadows[1]);
      display: grid;
      grid-template-columns: 90px 19px;
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      column-gap: 4px;
      padding: 2px;
      width: 120px;
  
      &[data-focused="true"] {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px var(--template-vars.shadows[1]);
      }
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus-visible {
        outline: 0;
      }
    `
  }
);

const StyledGroup = styled(NumberField.Group)`
  display: contents;
`;

const StyledInput = styled(NumberField.Input)(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    grid-column: 1/2;
    grid-row: 1/3;
    color: var(--template-palette-text-primary);
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `
);

const commonButtonStyles = ({ theme }: any) => `
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  width: 19px;
  height: 19px;
  font-size: 0.875rem;
  line-height: 1;
  background: var(--template-palette-background-default);
  color: var(--template-palette-text-primary);
  border: 0;
  transition: all 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    color: #fff;
    background: ${blue[500]};
  }
`;

const StyledIncrement = styled(NumberField.Increment)(
  ({ theme }) => `
    ${commonButtonStyles({ theme })}
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;
    border-color: var(--template-palette-divider);
    background: var(--template-palette-background-default);
    color: var(--template-palette-text-primary);
  `
);

const StyledDecrement = styled(NumberField.Decrement)(
  ({ theme }) => `
    ${commonButtonStyles({ theme })}
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    border-color: var(--template-palette-divider);
    background: var(--template-palette-background-default);
    color: var(--template-palette-text-primary);
  `
);
