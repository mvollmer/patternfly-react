import React from 'react';
import { AboutModal, Alert, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
import brandImg from '../../assets/PF-IconLogo.svg';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export const AboutModalComplexUserPositionedContent: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = (_event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={toggleModal}>
        Show about modal
      </Button>
      <AboutModal
        isOpen={isModalOpen}
        onClose={(e: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => toggleModal(e)}
        trademark="Trademark and copyright information here"
        brandImageSrc={brandImg}
        brandImageAlt="Patternfly Logo"
        backgroundImageSrc="/assets/images/pf-background.svg"
        hasNoContentContainer={true}
        productName="Product name"
      >
        <TextContent id="test1" className={spacing.pyXl}>
          <h4>About</h4>
          <p>Content here</p>
        </TextContent>
        <Alert variant="info" title="Updates available" />
        <TextContent id="test2" className={spacing.pyXl}>
          <TextList component="dl">
            <TextListItem component="dt">CFME version</TextListItem>
            <TextListItem component="dd">5.5.3.4.20102789036450</TextListItem>
            <TextListItem component="dt">Cloudforms version</TextListItem>
            <TextListItem component="dd">4.1</TextListItem>
            <TextListItem component="dt">Server name</TextListItem>
            <TextListItem component="dd">40DemoMaster</TextListItem>
            <TextListItem component="dt">User name</TextListItem>
            <TextListItem component="dd">Administrator</TextListItem>
            <TextListItem component="dt">User role</TextListItem>
            <TextListItem component="dd">EvmRole-super_administrator</TextListItem>
            <TextListItem component="dt">Browser version</TextListItem>
            <TextListItem component="dd">601.2</TextListItem>
            <TextListItem component="dt">Browser OS</TextListItem>
            <TextListItem component="dd">Mac</TextListItem>
          </TextList>
        </TextContent>
      </AboutModal>
    </React.Fragment>
  );
};
