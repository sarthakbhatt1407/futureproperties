import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Typography,
  notification,
  Row,
  Col,
  Card,
  DatePicker,
  List,
  Image,
  Grid,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const { Title } = Typography;
const { Option } = Select;

const { useBreakpoint } = Grid;

const PropertyCreationPage = () => {
  const screens = useBreakpoint();
  const isAdmin = useSelector((state) => state.isAdmin);
  const userId = useSelector((state) => state.userId);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFileChange = ({ fileList }) => {
    setLoading(true);
    setFileList(fileList);

    // Generate preview URLs for the selected images
    const newPreviewImages = fileList.map((file) => {
      return file.originFileObj
        ? URL.createObjectURL(file.originFileObj)
        : null;
    });
    setPreviewImages(newPreviewImages);
    setLoading(false);
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("userId", userId);
    if (!isAdmin) {
      formData.append("subCategory", "trending");
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/property/create-new-property`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        notification.success({
          message: "Success",
          description: "Property added successfully.",
        });
        form.resetFields();
        setFileList([]);
        setPreviewImages([]); // Clear previews on successful submission
      } else {
        throw new Error("Error adding property");
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong!",
      });
    }
    setLoading(false);
  };
  const getColumnCount = () => {
    if (screens.xs) return 2; // For extra small screens, 2 columns
    if (screens.sm) return 3; // For small screens, 3 columns
    return 4; // Default for medium and larger screens
  };
  return (
    <div
      style={{
        padding: "20px",
        width: `${screens.xs ? "90%" : "100%"}`,
        margin: "0 auto",
        overflowY: "scroll",
        height: "100%",
      }}
    >
      {loading && <Loader />}
      <Title level={2}>Upload Property</Title>
      <Card title="Property Details">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please enter the title!" }]}
              >
                <Input placeholder="Enter property title" />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Description"
                name="desc"
                rules={[
                  { required: true, message: "Please enter the description!" },
                ]}
              >
                <Input.TextArea placeholder="Enter property description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Locality"
                name="locality"
                rules={[
                  { required: true, message: "Please enter the locality!" },
                ]}
              >
                <Input placeholder="Enter locality" />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Property Status"
                name="propertyStatus"
                rules={[
                  { required: true, message: "Please select property status!" },
                ]}
              >
                <Select placeholder="Select property status">
                  <Option value="ready to move">Ready to move</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter the city!" }]}
              >
                <Input placeholder="Enter city" />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true, message: "Please enter the state!" }]}
              >
                <Input placeholder="Enter state" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Area (sq. ft)"
                name="area"
                rules={[{ required: true, message: "Please enter the area!" }]}
              >
                <Input placeholder="Enter area" type="number" />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please enter the price!" }]}
              >
                <Input placeholder="Enter price" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Facing"
                name="facing"
                rules={[{ required: true, message: "Please select facing!" }]}
              >
                <Select placeholder="Select facing">
                  <Option value="North">North</Option>
                  <Option value="South">South</Option>
                  <Option value="East">East</Option>
                  <Option value="West">West</Option>
                </Select>
              </Form.Item>
            </Col>
            {isAdmin && (
              <Col span={screens.xs ? 24 : 12}>
                <Form.Item
                  label="Sub Category"
                  name="subCategory"
                  rules={[
                    {
                      required: true,
                      message: "Please select a sub-category!",
                    },
                  ]}
                >
                  <Select placeholder="Select sub-category">
                    <Option value="trending">Trending</Option>
                    <Option value="mostviewed">Most viewed</Option>
                    <Option value="handpicked">Hand picked</Option>
                  </Select>
                </Form.Item>
              </Col>
            )}
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Furnishing"
                name="furnishing"
                rules={[
                  { required: true, message: "Please select furnishing type!" },
                ]}
              >
                <Select placeholder="Select furnishing type">
                  <Option value="Furnished">Furnished</Option>
                  <Option value="Semi-Furnished">Semi-Furnished</Option>
                  <Option value="Unfurnished">Unfurnished</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Floors"
                name="floors"
                rules={[
                  {
                    required: true,
                    message: "Please enter the number of floors!",
                  },
                ]}
              >
                <Input placeholder="Enter number of floors" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Facing Road (sq. ft.)"
                name="facingRoad"
                rules={[
                  { required: true, message: "Please enter the facing road!" },
                ]}
              >
                <Input placeholder="Enter facing road" type="number" />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Property Age"
                name="old"
                rules={[
                  {
                    required: true,
                    message: "Please enter property age!",
                  },
                ]}
              >
                <Input placeholder="In years" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  { required: true, message: "Please select a category!" },
                ]}
              >
                <Select placeholder="Select category">
                  <Option value="Independent House/Villa">
                    Independent House/Villa
                  </Option>
                  <Option value="Flat/Appartment">Flat/Appartment</Option>
                  <Option value="Plot/Land">Plot/Land</Option>
                  <Option value="Rental">Rental</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Card title="Upload Images" style={{ width: "100%" }}>
            <Form.Item
              label="Images"
              name="images"
              rules={[{ required: true, message: "Please upload images!" }]}
            >
              <Upload
                fileList={fileList}
                onChange={handleFileChange}
                beforeUpload={() => false} // Prevent auto upload
                multiple
                accept="image/*" // Accept only image files
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <List
              grid={{ gutter: 16, column: getColumnCount() }}
              dataSource={previewImages}
              renderItem={(item) => (
                <List.Item>
                  {item && <Image width={100} height={100} src={item} />}
                </List.Item>
              )}
            />
          </Card>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "30%",
                display: "block",
                margin: "20px auto",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PropertyCreationPage;
