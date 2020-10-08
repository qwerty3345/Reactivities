import React from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity,
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              {/* as="a"는 HTML a태그로 렌더링하겠다는것 */}
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => {
                    let sure: boolean = window.confirm(
                      `${activity.title}을(를) 정말 지우시겠어요?`
                    );
                    if (sure) {
                      deleteActivity(activity.id);
                    }
                  }}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
