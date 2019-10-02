import React from 'react';
import styled from 'styled-components';
import { map, reduce } from 'lodash/fp';
import IconTile from './IconTile';
import theme from '../theme';
import { animations } from './animations';

const animationsWithSections = reduce((acc, item) => {
  if (!acc[item.section]) {
    acc[item.section] = {
      name: item.section,
      icons: [],
    };
  }

  acc[item.section].icons.push(item);
  return acc;
}, {})(animations);

const IconGrid = () =>
  map(section => (
    <SectionWrapper key={section.name}>
      <SectionTitle>{section.name}</SectionTitle>
      <Grid>
        {section.icons.map(animation => (
          <IconTile key={animation.animationKey} {...animation} />
        ))}
      </Grid>
    </SectionWrapper>
  ))(animationsWithSections);

const SectionWrapper = styled.div`
  margin: 56px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: ${theme.space[5]};
  column-gap: ${theme.space[4]};
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 44px;
  font-weight: 400;
`;

export default IconGrid;
