import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FixedImage from './IllustrationFixed';
import SegmentContainer from './SegmentContainer';

const StyledCtaText = styled.p`
  line-height: 1.1;
  font-weight: 500;

  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    line-height: 1.3 !important;
  }
`;

const StyledBtnText = styled.span`
  font-size: 1.2rem;
  min-width: 250px;
  padding: 20px 0;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #fff;
  display: block;
  letter-spacing: 2px;
  font-weight: 300;

  @media (max-width: 991px) {
    font-size: 16px;
    min-width: auto;
    padding: 10px;
    display: inline-block;
  }
`;

const StyledBtnIcon = styled.span`
  transition: all 0.3s ease;
  border: 1px solid #fff;
  padding: 20px 24px;
  display: inline-block;
  letter-spacing: 2px;
  font-weight: 300;
  align-items: center;
  @media (max-width: 991px) {
    padding: 10px;
    display: inline-block;
  }
`;

const StyledA = styled.a`
  &:hover {
    background: #193753;
    text-decoration: none;
  }
`;

function CtaSegment({ ctaText, buttonText, buttonIcon, buttonLink, id, textColor, bgColor }) {
  return (
    <SegmentContainer id={id} className="py-5" color={textColor} bgColor={bgColor}>
      <Row className="align-items-center">
        <Col md={6} sm={12}>
          <StyledCtaText className="h2">{ctaText}</StyledCtaText>
        </Col>
        <Col md={6} sm={12} className="text-center font-weight-light">
          <div className="align-items-center h-100">
            <StyledA
              href={buttonLink}
              className={`${textColor === '#ffffff' ? 'text-white' : 'text-dark'} d-inline-flex`}
            >
              <StyledBtnIcon>
                <FixedImage image={buttonIcon} />
              </StyledBtnIcon>
              <StyledBtnText>{buttonText}</StyledBtnText>
            </StyledA>
          </div>
        </Col>
      </Row>
    </SegmentContainer>
  );
}

export default CtaSegment;
