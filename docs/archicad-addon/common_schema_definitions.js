var gSchemaDefinitions = {
    "Elements": {
        "type": "array",
        "description": "A list of elements.",
        "items": {
            "$ref": "#/ElementIdArrayItem"
        }
    },
    "ElementIdArrayItem": {
        "type": "object",
        "properties": {
            "elementId": {
                "$ref": "#/ElementId"
            }
        },
        "additionalProperties": false,
        "required": [
            "elementId"
        ]
    },
    "ElementId": {
        "type": "object",
        "description": "The identifier of an element.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "AttributeIds": {
        "type": "array",
        "description": "A list of attributes.",
        "items": {
            "$ref": "#/AttributeIdArrayItem"
        }
    },
    "AttributeIdArrayItem": {
        "type": "object",
        "properties": {
            "attributeId": {
                "$ref": "#/AttributeId"
            }
        },
        "additionalProperties": false,
        "required": [
            "attributeId"
        ]
    },
    "AttributeId": {
        "type": "object",
        "description": "The identifier of an attribute.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "Guid": {
        "type": "string",
        "description": "A Globally Unique Identifier (or Universally Unique Identifier) in its string representation as defined in RFC 4122.",
        "format": "uuid",
        "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
    },
    "Hotlinks": {
        "type": "array",
        "description": "A list of hotlink nodes.",
        "items": {
            "$ref": "#/Hotlink"
        }
    },
    "Hotlink": {
        "type": "object",
        "description": "The details of a hotlink node.",
        "properties": {
            "location": {
                "type": "string",
                "description": "The path of the hotlink file."
            },
            "children": {
                "$ref": "#/Hotlinks",
                "description": "The children of the hotlink node if it has any."
            }
        },
        "additionalProperties": false,
        "required": [
            "location"
        ]
    },
    "GDLParameterList": {
        "type": "object",
        "description": "The list of GDL parameters.",
        "properties": {
            "parameters" : {
                "type": "array",
                "description": "The list of GDL parameters.",
                "items": {
                    "$ref": "#/GDLParameterDetails"
                }
            }
        },
        "required": [
            "parameters"
        ]
    },
    "GDLParameterDetails": {
        "type": "object",
        "description": "Details of a GDL parameter.",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the parameter."
            },
            "index": {
                "type": "string",
                "description": "The index of the parameter."
            },
            "type": {
                "type": "string",
                "description": "The type of the parameter."
            },
            "dimension1": {
                "type": "number",
                "description": "The 1st dimension of array (in case of array value)."
            },
            "dimension2": {
                "type": "number",
                "description": "The 2nd dimension of array (in case of array value)."
            },
            "value": {
                "description": "The value of the parameter."
            }
        },
        "additionalProperties": true,
        "required": [
            "index",
            "type",
            "value"
        ]
    },
    "2DCoordinate": {
        "type": "object",
        "description" : "2D coordinate.",
        "properties" : {
            "x": {
                "type": "number",
                "description" : "X value of the coordinate."
            },
            "y" : {
                "type": "number",
                "description" : "Y value of the coordinate."
            }
        },
        "additionalProperties": false,
        "required" : [
            "x",
            "y"
        ]
    },
    "3DCoordinate": {
        "type": "object",
        "description" : "3D coordinate.",
        "properties" : {
            "x": {
                "type": "number",
                "description" : "X value of the coordinate."
            },
            "y" : {
                "type": "number",
                "description" : "Y value of the coordinate."
            },
            "z" : {
                "type": "number",
                "description" : "Z value of the coordinate."
            }
        },
        "additionalProperties": false,
        "required" : [
            "x",
            "y",
            "z"
        ]
    },
    "3DDimensions": {
        "type": "object",
        "description" : "Dimensions in 3D.",
        "properties" : {
            "x": {
                "type": "number",
                "description" : "X dimension."
            },
            "y" : {
                "type": "number",
                "description" : "Y dimension."
            },
            "z" : {
                "type": "number",
                "description" : "Z dimension."
            }
        },
        "additionalProperties": false,
        "required" : [
            "x",
            "y",
            "z"
        ]
    },
    "Error": {
        "type": "object",
        "description": "The details of an error.",
        "properties": {
            "code": {
                "type": "integer",
                "description": "The code of the error."
            },
            "message": {
                "type": "string",
                "description": "The error message."
            }
        },
        "additionalProperties": false,
        "required": [
            "code",
            "message"
        ]
    },
    "ErrorItem": {
        "type": "object",
        "properties": {
            "error": {
                "$ref": "#/Error"
            }
        },
        "additionalProperties": false,
        "required": [ "error" ]
    },
    "SuccessfulExecutionResult": {
        "type": "object",
        "description": "The result of a successful execution.",
        "properties": {
            "success": {
                "type": "boolean",
                "enum": [ true ]
            }
        },
        "additionalProperties": false,
        "required": [
            "success"
        ]
    },
    "FailedExecutionResult": {
        "type": "object",
        "description": "The result of a failed execution.",
        "properties": {
            "success": {
                "type": "boolean",
                "enum": [ false ]
            },
            "error": {
                "$ref": "#/Error",
                "description": "The details of an execution failure."
            }
        },
        "additionalProperties": false,
        "required": [
            "success",
            "error"
        ]
    },
    "ExecutionResult": {
        "type": "object",
        "description": "The result of the execution.",
        "oneOf": [
            {
                "$ref": "#/SuccessfulExecutionResult"
            },
            {
                "$ref": "#/FailedExecutionResult"
            }
        ]
    },
    "ExecutionResults": {
        "type": "array",
        "description": "A list of execution results.",
        "items": {
            "$ref": "#/ExecutionResult"
        }
    },
    "ElementType": {
        "type": "string",
        "description": "The type of an element.",
        "enum": [
            "Wall",
            "Column",
            "Beam",
            "Window",
            "Door",
            "Object",
            "Lamp",
            "Slab",
            "Roof",
            "Mesh",
            "Dimension",
            "RadialDimension",
            "LevelDimension",
            "AngleDimension",
            "Text",
            "Label",
            "Zone",
            "Hatch",
            "Line",
            "PolyLine",
            "Arc",
            "Circle",
            "Spline",
            "Hotspot",
            "CutPlane",
            "Camera",
            "CamSet",
            "Group",
            "SectElem",
            "Drawing",
            "Picture",
            "Detail",
            "Elevation",
            "InteriorElevation",
            "Worksheet",
            "Hotlink",
            "CurtainWall",
            "CurtainWallSegment",
            "CurtainWallFrame",
            "CurtainWallPanel",
            "CurtainWallJunction",
            "CurtainWallAccessory",
            "Shell",
            "Skylight",
            "Morph",
            "ChangeMarker",
            "Stair",
            "Riser",
            "Tread",
            "StairStructure",
            "Railing",
            "RailingToprail",
            "RailingHandrail",
            "RailingRail",
            "RailingPost",
            "RailingInnerPost",
            "RailingBaluster",
            "RailingPanel",
            "RailingSegment",
            "RailingNode",
            "RailingBalusterSet",
            "RailingPattern",
            "RailingToprailEnd",
            "RailingHandrailEnd",
            "RailingRailEnd",
            "RailingToprailConnection",
            "RailingHandrailConnection",
            "RailingRailConnection",
            "RailingEndFinish",
            "BeamSegment",
            "ColumnSegment",
            "Opening",
            "Unknown"
        ]
    },
    "ElementFilter": {
        "type": "string",
        "description": "A filter type for an element.",
        "enum": [
            "IsEditable",
            "IsVisibleByLayer",
            "IsVisibleByRenovation",
            "IsVisibleByStructureDisplay",
            "IsVisibleIn3D",
            "OnActualFloor",
            "OnActualLayout",
            "InMyWorkspace",
            "IsIndependent",
            "InCroppedView",
            "HasAccessRight",
            "IsOverriddenByRenovation"
        ]
    },
    "WindowType": {
        "type": "string",
        "description": "The type of a window.",
        "enum": [
            "FloorPlan",
            "Section",
            "Details",
            "3DModel",
            "Layout",
            "Drawing",
            "CustomText",
            "CustomDraw",
            "MasterLayout",
            "Elevation",
            "InteriorElevation",
            "Worksheet",
            "Report",
            "3DDocument",
            "External3D",
            "Movie3D",
            "MovieRendering",
            "Rendering",
            "ModelCompare",
            "Interactive Schedule",
            "Unknown"
        ]
    },
    "IssueId": {
        "type": "object",
        "description": "The identifier of an issue.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "IssueIdArrayItem": {
        "type": "object",
        "properties": {
            "issueId": {
                "$ref": "#/IssueId"
            }
        },
        "additionalProperties": false,
        "required": [
            "issueId"
        ]
    },
    "Issues": {
        "type": "array",
        "description": "A list of Issues.",
        "items": {
            "$ref": "#/IssueIdArrayItem"
        }
    },
    "IssueElementType": {
        "type": "string",
        "description": "The attachment type of an element component of an issue.",
        "enum": [
            "Creation",
            "Highlight",
            "Deletion",
            "Modification"
        ]
    },
    "IssueCommentStatus": {
        "type": "string",
        "description": "The status of an issue comment.",
        "enum": [
            "Error",
            "Warning",
            "Info",
            "Unknown"
        ]
    },
    "PropertyId": {
        "type": "object",
        "description": "The identifier of a property.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "PropertyGroupId": {
        "type": "object",
        "description": "The identifier of a property group.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "PropertyIdArrayItem": {
        "type": "object",
        "properties": {
            "propertyId": {
                "$ref": "#/PropertyId"
            }
        },
        "additionalProperties": false,
        "required": [
            "propertyId"
        ]
    },
    "PropertyIds": {
        "type": "array",
        "description": "A list of property identifiers.",
        "items": {
            "$ref": "#/PropertyIdArrayItem"
        }
    },
    "PropertyDetails": {
        "type": "object",
        "description": "The details of the property.",
        "properties": {
            "propertyId": {
                "$ref": "#/PropertyId"
            },
            "propertyGroupName": {
                "type": "string"
            },
            "propertyName": {
                "type": "string"
            }
        },
        "additionalProperties": false,
        "required": [
            "propertyId",
            "propertyGroupName",
            "propertyName"
        ]
    },
    "PropertyValue": {
        "type": "object",
        "description": "The display string value of a property.",
        "properties": {
            "value": {
                "type": "string"
            }
        },
        "additionalProperties": true,
        "required": [
            "value"
        ]
    },
    "PropertyValueOrErrorItem": {
        "type": "object",
        "description": "A property value or an error",
        "oneOf": [
            {
                "title": "propertyValue",
                "properties": {
                    "propertyValue": {
                        "$ref": "#/PropertyValue"
                    }
                },
                "additionalProperties": false,
                "required": [ "propertyValue" ]
            },
            {
                "title": "error",
                    "$ref": "#/ErrorItem"
            }
        ]
    },
    "PropertyValues": {
        "type": "array",
        "description": "A list of property values.",
        "items": {
            "$ref": "#/PropertyValueOrErrorItem"
        }
    },
    "PropertyValuesOrError": {
        "type": "object",
        "description": "A list of property values or an error.",
        "oneOf": [
            {
                "title": "propertyValues",
                "properties": {
                    "propertyValues": {
                        "$ref": "#/PropertyValues"
                    }
                },
                "additionalProperties": false,
                "required": [ "propertyValues" ]
            },
            {
                "title": "error",
                "$ref": "#/ErrorItem"
            }
        ]
    },
    "PropertyValuesOrErrorArray": {
        "type": "array",
        "description": "A list of property value lists.",
        "items": {
            "$ref": "#/PropertyValuesOrError"
        }
    },
    "PropertyIdOrError": {
        "type": "object",
        "description": "A propertyId or an error.",
        "oneOf": [
            {
                "properties": {
                    "propertyId": {
                        "$ref": "#/PropertyId"
                    }
                },
                "additionalProperties": false,
                "required": [ "propertyId" ]
            },
            {
                "$ref": "#/ErrorItem"
            }
        ]
    },
    "PropertyIdOrErrorArray": {
        "type": "array",
        "description": "A list of property identifiers.",
        "items": {
            "$ref": "#/PropertyIdOrError"
        }
    },
    "ElementPropertyValue": {
        "type": "object",
        "description": "A property value with the identifiers of the property and its owner element.",
        "properties": {
            "elementId": {
                "$ref": "#/ElementId"
            },
            "propertyId": {
                "$ref": "#/PropertyId"
            },
            "propertyValue": {
                "$ref": "#/PropertyValue"
            }
        },
        "additionalProperties": false,
        "required": [
            "elementId",
            "propertyId",
            "propertyValue"
        ]
    },
    "ElementPropertyValues": {
        "type": "array",
        "description": "A list of element property values.",
        "items": {
            "$ref": "#/ElementPropertyValue"
        }
    },
    "PropertyType": {
        "type": "string",
        "enum": [
            "number",
            "integer",
            "string",
            "boolean",
            "length",
            "area",
            "volume",
            "angle",
            "numberList",
            "integerList",
            "stringList",
            "booleanList",
            "lengthList",
            "areaList",
            "volumeList",
            "angleList",
            "singleEnum",
            "multiEnum"
        ]
    },
    "DisplayValueEnumId": {
        "type": "object",
        "description": "An enumeration value identifier using the displayed value.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "displayValue" ]
            },
            "displayValue": {
                "type": "string"
            }
        },
        "additionalProperties": false,
        "required": [
            "type",
            "displayValue"
        ]
    },
    "NonLocalizedValueEnumId": {
        "type": "object",
        "description": "An enumeration value identifier using the nonlocalized value.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "nonLocalizedValue" ]
            },
            "nonLocalizedValue": {
                "type": "string"
            }
        },
        "additionalProperties": false,
        "required": [
            "type",
            "nonLocalizedValue"
        ]
    },
    "EnumValueId": {
        "type": "object",
        "description": "The identifier of a property enumeration value.",
        "oneOf": [
            {
                "$ref": "#/DisplayValueEnumId"
            },
            {
                "$ref": "#/NonLocalizedValueEnumId"
            }
        ]
    },
    "EnumValueIds": {
        "type": "array",
        "description": "A list of enumeration identifiers.",
        "items": {
            "type": "object",
            "properties": {
                "enumValueId": {
                    "$ref": "#/EnumValueId"
                }
            },
            "additionalProperties": false,
            "required": [ "enumValueId" ]
        }
    },
    "NormalOrUserUndefinedPropertyValue": {
        "type": "object",
        "description": "A normal or a userUndefined property value.",
        "oneOf": [
            {
                "$ref": "#/NormalNumberPropertyValue"
            },
            {
                "$ref": "#/NormalIntegerPropertyValue"
            },
            {
                "$ref": "#/NormalStringPropertyValue"
            },
            {
                "$ref": "#/NormalBooleanPropertyValue"
            },
            {
                "$ref": "#/NormalLengthPropertyValue"
            },
            {
                "$ref": "#/NormalAreaPropertyValue"
            },
            {
                "$ref": "#/NormalVolumePropertyValue"
            },
            {
                "$ref": "#/NormalAnglePropertyValue"
            },
            {
                "$ref": "#/NormalNumberListPropertyValue"
            },
            {
                "$ref": "#/NormalIntegerListPropertyValue"
            },
            {
                "$ref": "#/NormalStringListPropertyValue"
            },
            {
                "$ref": "#/NormalBooleanListPropertyValue"
            },
            {
                "$ref": "#/NormalLengthListPropertyValue"
            },
            {
                "$ref": "#/NormalAreaListPropertyValue"
            },
            {
                "$ref": "#/NormalVolumeListPropertyValue"
            },
            {
                "$ref": "#/NormalAngleListPropertyValue"
            },
            {
                "$ref": "#/NormalSingleEnumPropertyValue"
            },
            {
                "$ref": "#/NormalMultiEnumPropertyValue"
            },
            {
                "$ref": "#/UserUndefinedPropertyValue"
            }
        ]
    },
    "PropertyValueDetails": {
        "type": "object",
        "description": "A normal, userUndefined, notAvailable or notEvaluated property value.",
        "oneOf": [
            {
                "$ref": "#/NormalOrUserUndefinedPropertyValue"
            },
            {
                "$ref": "#/NotAvailablePropertyValue"
            }
        ]
    },
    "UserUndefinedPropertyValue": {
        "type": "object",
        "description": "A userUndefined value means that there is no actual number/string/etc. value, but the user deliberately set an Undefined value: this is a valid value, too.",
        "properties": {
            "type": {
                "$ref": "#/PropertyType"
            },
            "status": {
                "type": "string",
                "enum": [ "userUndefined" ]
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status" ]
    },
    "NotAvailablePropertyValue": {
        "type": "object",
        "description": "A notAvailable value means that the property is not available for the property owner (and therefore it has no property value for it).",
        "properties": {
            "type": {
                "$ref": "#/PropertyType"
            },
            "status": {
                "type": "string",
                "enum": [ "notAvailable" ]
            }
        },
        "additionalProperties": false,
        "required": [
            "type",
            "status"
        ]
    },
    "NormalNumberPropertyValue": {
        "type": "object",
        "description": "A number property value containing a valid numeric value.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "number" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "number"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalIntegerPropertyValue": {
        "type": "object",
        "description": "An integer property value containing a valid integer number.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "integer" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "integer"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalStringPropertyValue": {
        "type": "object",
        "description": "A string property value containing a valid string.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "string" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "string"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalBooleanPropertyValue": {
        "type": "object",
        "description": "A boolean property value containing a valid boolean value.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "boolean" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "boolean"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalLengthPropertyValue": {
        "type": "object",
        "description": "A length property value containing a real length value. The value is measured in SI (meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "length" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "number"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalAreaPropertyValue": {
        "type": "object",
        "description": "An area property value containing a real area. The value is measured in SI (square meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "area" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "number"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalVolumePropertyValue": {
        "type": "object",
        "description": "A volume property value containing a real volume. The value is measured in SI (cubic meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "volume" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "number"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalAnglePropertyValue": {
        "type": "object",
        "description": "An angle property value containing a real angle. The value is measured in SI (radians).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "angle" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "number"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalNumberListPropertyValue": {
        "type": "object",
        "description": "A number list property value containing numbers in an array.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "numberList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalIntegerListPropertyValue": {
        "type": "object",
        "description": "An integer list property value containing integers in an array.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "integerList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "integer"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalStringListPropertyValue": {
        "type": "object",
        "description": "A string list property value containing strings in an array.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "stringList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalBooleanListPropertyValue": {
        "type": "object",
        "description": "A boolean list property value containing boolean values in an array.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "booleanList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "boolean"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalLengthListPropertyValue": {
        "type": "object",
        "description": "A length list property value containing length values in an array. The values are measured in SI (meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "lengthList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalAreaListPropertyValue": {
        "type": "object",
        "description": "An area list property value containing areas in an array. The values are measured in SI (square meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "areaList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalVolumeListPropertyValue": {
        "type": "object",
        "description": "A volume list property value containing volumes in an array. The values are measured in SI (cubic meters).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "volumeList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalAngleListPropertyValue": {
        "type": "object",
        "description": "An angle list property value containing angles in an array. The values are measured in SI (radians).",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "angleList" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "type": "array",
                "items": {
                    "type": "number"
                }
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalSingleEnumPropertyValue": {
        "type": "object",
        "description": "A single enumeration property value containing the ID of the selected enum value.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "singleEnum" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "$ref": "#/EnumValueId"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "NormalMultiEnumPropertyValue": {
        "type": "object",
        "description": "A multiple choice enumeration property value containing the IDs of the selected enum values in an array.",
        "properties": {
            "type": {
                "type": "string",
                "enum": [ "multiEnum" ]
            },
            "status": {
                "type": "string",
                "enum": [ "normal" ]
            },
            "value": {
                "$ref": "#/EnumValueIds"
            }
        },
        "additionalProperties": false,
        "required": [ "type", "status", "value" ]
    },
    "BasicDefaultValue": {
        "type": "object",
        "description": "Default value of the property in case of a basic property value (ie. not an expression).",
        "properties": {
            "basicDefaultValue": {
                "$ref": "#/PropertyValueDetails"
            }
        },
        "additionalProperties": false,
        "required": [
            "basicDefaultValue"
        ]
    },
    "ExpressionDefaultValue": {
        "type": "object",
        "description": "Default value of the property in case of an expression based property value.",
        "properties": {
            "expressions": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        },
        "additionalProperties": false,
        "required": [
            "expressions"
        ]
    },
    "PropertyDefaultValue": {
        "type": "object",
        "oneOf": [
            {
                "$ref": "#/BasicDefaultValue"
            },
            {
                "$ref": "#/ExpressionDefaultValue"
            }
        ]
    },
    "ClassificationSystemId": {
        "type": "object",
        "description": "The identifier of a classification system.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "ClassificationSystemIdArrayItem": {
        "type": "object",
        "properties": {
            "classificationSystemId": {
                "$ref": "#/ClassificationSystemId"
            }
        },
        "additionalProperties": false,
        "required": [
            "classificationSystemId"
        ]
    },
    "ClassificationSystemIds": {
        "type": "array",
        "description": "A list of classification system identifiers.",
        "items": {
            "$ref": "#/ClassificationSystemIdArrayItem"
        }
    },
    "ClassificationItemId": {
        "type": "object",
        "description": "The identifier of a classification item.",
        "properties": {
            "guid": {
                "$ref": "#/Guid"
            }
        },
        "additionalProperties": false,
        "required": [
            "guid"
        ]
    },
    "ClassificationItemIdArrayItem": {
        "type": "object",
        "properties": {
            "classificationItemId": {
                "$ref": "#/ClassificationItemId"
            }
        },
        "additionalProperties": false,
        "required": [
            "classificationItemId"
        ]
    },
    "ClassificationId": {
        "type": "object",
        "description": "The element classification identifier.",
        "properties": {
            "classificationSystemId": {
                "$ref": "#/ClassificationSystemId"
            },
            "classificationItemId": {
                "$ref": "#/ClassificationItemId",
                "description": "The element's classification in the given system. If no value is specified here, the element is Unclassified in this system."
            }
        },
        "additionalProperties": false,
        "required": [
            "classificationSystemId"
        ]
    },
    "ClassificationIdOrError": {
        "type": "object",
        "description": "A classification identifier or an error.",
        "oneOf": [
            {
                "title": "classificationId",
                "properties": {
                    "classificationId": {
                        "$ref": "#/ClassificationId"
                    }
                },
                "additionalProperties": false,
                "required": [ "classificationId" ]
            },
            {
                "title": "error",
                "$ref": "#/ErrorItem"
            }
        ]   
    },
    "ClassificationIdsOrErrors": {
        "type": "array",
        "description": "A list of element classification identifiers or errors.",
        "items": {
            "$ref": "#/ClassificationIdOrError"
        }
    },
    "ElementClassificationOrError": {
        "type": "object",
        "description": "Element classification identifiers or errors.",
        "oneOf": [
            {
                "title": "classificationIds",
                "properties": {
                    "classificationIds": {
                        "$ref": "#/ClassificationIdsOrErrors"
                    }
                },
                "additionalProperties": false,
                "required": [ "classificationIds" ]
            },
            {
                "title": "error",
                "$ref": "#/ErrorItem"
            }
        ]
    },
    "ElementClassificationsOrErrors": {
        "type": "array",
        "description": "A list of element classification identifiers or errors.",
        "items": {
            "$ref": "#/ElementClassificationOrError"
        }
    },
    "ElementClassification": {
        "type": "object",
        "description": "The classification of an element.",
        "properties": {
            "elementId": {
                "$ref": "#/ElementId"
            },
            "classificationId": {
                "$ref": "#/ClassificationId"
            }
        },
        "additionalProperties": false,
        "required": [
            "elementId",
            "classificationId"
        ]
    },
    "ElementClassifications": {
        "type": "array",
        "description": "A list of element classification identifiers.",
        "items": {
            "$ref": "#/ElementClassification"
        }
    }
};